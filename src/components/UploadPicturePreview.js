import React, { Component } from 'react'

export default class UploadPicturePreview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgNodeList: []
    }
  }

  fileChange = e => {
    // react上传多个图片并预览
    e.persist()
    const files = e.target.files
    const readAndPreview = (file) => {
      const reader = new FileReader()
      const readFlag = /\.(jpe?g|png|gif)$/i.test(file.name)
      const readType = readFlag ? 'readAsDataURL' : 'readAsText'
      reader[readType](file)
      const onload = (e) => {
        const result = e.target.result
        if (readFlag) {
          const src = result
          const imgDom = <img src={src} key={src} />
          this.setState(({ imgDomList }) => ({
            imgDomList: [...imgDomList, imgDom]
          }))
        } else {
          log(e)
        }
      }
      reader.addEventListener('load', onload, false)
    }
    
    if (files && files.length > 0) {
      [].forEach.call(files, readAndPreview)
    }
  }

  render() {
    const { imgNodeList } = this.state

    return (
      <div>
        <input
          type='file'
          multiple
          // accept='image/*'
          onChange={this.fileChange} />
        {imgNodeList}
      </div>
    )
  }
}