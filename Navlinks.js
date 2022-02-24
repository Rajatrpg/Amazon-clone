import React from 'react'
import { Link } from 'react-router-dom'
import './Navlinks.css'
export default function Navlinks() {
    return (
        <div className="navlinks">
            <div className="navlinks__outer">
                <div className="navlinks__inner">
                </div>
                <Link to="/">Today's Deals</Link>
                <Link to="/">Customer Service</Link>
                <Link to="/">Registry</Link>
                <Link to="/">Gift Cards</Link>
                <Link to="/">Sell</Link>
            </div>

        </div>
    )
}