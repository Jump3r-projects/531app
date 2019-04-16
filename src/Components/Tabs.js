import React from 'react';
import classnames from 'classnames';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../App.css'


const Tabs = props => (
    <Nav tabs>
        <NavItem>
            <NavLink
            className={classnames({ active: props.activeTab === '1' })}
            onClick={() => { props.toggle('1'); }}
            >
            Bench
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({ active: props.activeTab === '2' })}
            onClick={() => { props.toggle('2'); }}
            >
            Deadlift
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({ active: props.activeTab === '3' })}
            onClick={() => { props.toggle('3'); }}
            >
            Squat
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({ active: props.activeTab === '4' })}
            onClick={() => { props.toggle('4'); }}
            >
            OH Press
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink
            className={classnames({ active: props.activeTab === '5' })}
            onClick={() => { props.toggle('5'); }}
            >
            Other
            </NavLink>
        </NavItem>
    </Nav>
)

export default Tabs
