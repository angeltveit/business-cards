import React, { Component } from 'react';
import './camera.component.css';

class Camera extends Component {
  constructor(props) {
    super(props)
    console.log('props?', this.props)
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }
  componentDidMount() {
    this.init()
  }
  componentWillUnmount() {
    if(this.track) this.track.stop()
  }
  init() {
    if(!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return
    const config = {
      video: true,
      audio: false,
    }
    navigator.mediaDevices.getUserMedia(config).then( stream => {
      this.track = stream.getTracks()[0]
      if(!this.videoElement) return
      this.videoElement.src = window.URL.createObjectURL(stream)
      this.videoElement.play()
    })
  }
  capture() {
    const context = this.canvasElement.getContext('2d')
    context.drawImage(this.videoElement, 0, 0, 640, 480)
    if(this.track) this.track.stop()
    this.canvasElement.toBlob( blob=> {
      this.props.setImage(URL.createObjectURL(blob))
    })
  }
  render() {
    return (
      <div className="camera">
        <video
          id="video"
          width="640"
          height="480"
          autoplay
          ref= { e => this.videoElement = e }
        ></video>
        <div
          className="button"
          id="snap"
          onClick={ () => this.capture() }
        ></div>
        <canvas
          id="canvas"
          width="640"
          height="480"
          ref= { e => this.canvasElement = e}
        ></canvas>
      </div>
    );
  }
}

export default Camera;
