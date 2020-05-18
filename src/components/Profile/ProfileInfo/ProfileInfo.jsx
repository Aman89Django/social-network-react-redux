import React, {Component} from 'react';
import s from "./ProfileInfo.module.css";

class ProfileInfo extends Component {
    render() {
        return (
            <div>
                <div className={s.main_background}>
                    <img
                        src="https://www.visitflorida.com/content/dam/visitflorida/en-us/images/11.%20Flagler%20Beachcroppedhoriz.jpg.1280.500.rendition"
                        alt="image"/>
                </div>
                <div>Content</div>
            </div>
        );
    }
}

export default ProfileInfo;