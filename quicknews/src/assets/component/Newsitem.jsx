import React, { Component } from 'react'


export default class Newsitem extends Component {
  render() {
    let { title, description, urlToImage, newsurl, author, source } = this.props;
    return (
      <div className={`"news_item bg-${this.props.mode} text-${this.props.mode === "light" ? 'dark' : 'light'}"`}>
        <div className='my-5 container ' >

          <div className="card " style={{ width: "18rem" }}>
            <img  src={!urlToImage ? "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5568x3132+0+290/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F22%2F39%2F299b1e534af1aa08e0b66384f9b7%2Fgettyimages-2170591870.jpg" : urlToImage} className="card-img-top overflow-hidden" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{!title ? "" : title}...<span className="badge rounded-pill bg-success">Success</span><span className=" source position-absolute top-0 start-50 overflow-hidden translate-middle badge rounded-pill bg-danger">
                {source}
                <span className="visually-hidden">unread messages</span>
                <span className="visually-hidden">New alerts</span>
              </span></h5>
              <p className="card-text">{!description ? "" : description}...</p>
              <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
              <div className="card-footer text-muted">
                BY {!author ? 'unkown' : author}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
