import React from 'react'

const serializers = {
    types: {
        code: props => <pre className="single--code"><code>{props.node.code}</code></pre>
    }
}

export default serializers