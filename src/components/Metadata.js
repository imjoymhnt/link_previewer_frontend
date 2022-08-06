import React, {useState} from 'react'
import {Row, Col, Image} from 'antd'

const Metadata = ({data, loading, error}) => {
    const url = data.requestUrl.split(".")
    let newUrl = ""
    for(let i = 0; i < url.length -1; i++) {
        if(i!=0) {
            newUrl+= "." + url[i]
        } else {
            newUrl+= url[i]
        }
    }
    const domain = url[url.length-1].split("/")[0]
console.log(data.hasOwnProperty("ogImage"));
  return (
    <Row>
        
        {Object.keys(data).length > 0 && !error ?  <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12, offset: 6  }}
          lg={{ span: 12, offset: 6  }}
          xl={{ span: 12, offset: 6  }}
          xxl={{ span: 12, offset: 6  }}
        >
    <h2><span><b><u>Title:</u></b> {data?.ogTitle? data.ogTitle : "NA"}</span></h2>
    <h2><span><b><u>Description:</u> </b>{data?.ogDescription? data.ogDescription : "NA"}</span></h2>
    <h2><b><u>Image:</u></b> <a target="_blank" href={data.hasOwnProperty("ogImage") ? data.ogImage.url:"NA"}>{data.hasOwnProperty("ogImage") ? data.ogImage.url:"NA"}</a></h2>
    <Image
    width={500}
    src={data.hasOwnProperty("ogImage") ? data.ogImage.url:"NA"}
  />
  <h2><span><b><u>Website Address: </u></b><a target="_blank" href={newUrl + "." + domain}>{newUrl + "." + domain}</a></span></h2>
  </Col> : <h1>Not a valid url</h1>}
      
  </Row>
  )
}

export default Metadata