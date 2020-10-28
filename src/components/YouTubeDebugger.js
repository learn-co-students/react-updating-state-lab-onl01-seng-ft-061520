import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
        };
    }

    handleBitrate = () => {
        this.setState(previousState => {
            return {
            errors: [],
            user: null,
            settings: {
              bitrate: previousState.settings.bitrate = 12,
              video: {
                resolution: '1080p'
              }
            }
            }
        })
    }

    handleRes = () => {
        this.setState(previousState => {
            return {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: previousState.settings.video.resolution = '720p'
              }
            }
            }
        })
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrate}></button>
                <button className="resolution" onClick={this.handleRes}></button>
            </div>
        );
    }
}

export default YouTubeDebugger;