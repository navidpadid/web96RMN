import React, { Component } from 'react';
import './navstyle.css';
import './Stylesheets/css/main.css';
import './Stylesheets/css/materialdesignicons.min.css';


class leftMenuFooter extends Component {
    render() {
        return (
            <div className="spark">
                <div className="flex-row-container">
                    <div className="flex-col-container">
                        <div className="top_label">
                            Spark
                        </div>
                        <div className="bottom_label">
                            Free $0/month
                        </div>
                    </div>
                    <div className="upgrade_button">
                        upgrade
                    </div>
                </div>

            </div>
        );
    }
}


export default leftMenuFooter;

