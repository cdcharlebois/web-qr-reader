import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

import QrReader from 'react-qr-scanner'
// import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/WebQRCodeReader.css";

class WebQRCodeReader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scanning: true
        }
        this.handleScan = this.handleScan.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    handleScan(data) {
        const { attr, onScanAction } = this.props;
        if (data && this.state.scanning) {
            console.log(`Scan: ${data}`);
            attr.setValue(data);
            if (onScanAction && onScanAction.canExecute) {
                onScanAction.execute();
                this.setState({ scanning: false });
            }
        }

    }

    handleError(e) {
        console.log(e);
    }

    render() {
        const { delay } = this.props;
        return (
            <QrReader
                delay={delay}
                onScan={this.handleScan}
                onError={this.handleError}
                style={{ width: "100%" }}
            />
        )
    }
}

export default hot(WebQRCodeReader);
