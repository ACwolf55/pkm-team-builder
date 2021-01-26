import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import './TeamSummary.css'


export default class TeamSummary extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='team-summary'>
                <h2>Team Summary</h2>

                <table className='summary-table'>
                    <tr>
                        <th>Highest Stat total</th>
                        <th>Best Attack</th>
                        <th>Best Speed</th>
                    </tr>
                    <tr>
                        <td>res.data</td>
                        <td>res.data</td>
                        <td>res.data</td>
                    </tr>
                </table>




            </div>
        )

    }
}