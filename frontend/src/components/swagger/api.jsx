import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'swagger-ui/dist/swagger-ui.css'

// https://github.com/swagger-api/swagger-ui/issues/4745 workaround
class SwaggerUI extends Component {

  componentDidMount () {
    const url = this.props.url
    const page = `<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Swagger</title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@3.12.1/swagger-ui.css">


</head>
<body>

<div id="swagger-ui"></div>

<script src="https://unpkg.com/swagger-ui-dist@3.19.5/swagger-ui-standalone-preset.js"></script>
<script src="https://unpkg.com/swagger-ui-dist@3.19.5/swagger-ui-bundle.js"></script>

<script>
    window.onload = function() {
        // Build a system
        const ui = SwaggerUIBundle({
            url: "${url}",
            dom_id: '#swagger-ui',
            deepLinking: true,
            presets: [
                SwaggerUIBundle.presets.apis,
                SwaggerUIStandalonePreset
            ],
            plugins: [
                SwaggerUIBundle.plugins.DownloadUrl
            ],
            layout: "BaseLayout"
        })
        window.ui = ui
    }
</script>
</body>
</html>`
    const frame = this.refs.frame

    const ifrmDoc = frame.contentWindow.document
    ifrmDoc.open()
    ifrmDoc.write(page)
    ifrmDoc.close()
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div className="swaggerContainer">
        <iframe id="frame" title="swagger" style={{
          height: '3000px',
          width: '99%', border: 0
        }} seamless="seamless" ref="frame"/>
      </div>
    )
  }
}

SwaggerUI.propTypes = {
  url: PropTypes.string,
  spec: PropTypes.object
}

SwaggerUI.defaultProps = {
  url: `${window.location.origin}/api/api-docs`
}

export default SwaggerUI
