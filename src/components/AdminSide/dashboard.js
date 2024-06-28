import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../AdminSide/dashboard.css'

const Dashboard = () => {
  return (
    <div>
      {/* Header */}
      <div id="top-nav" className="dashboard-navbar navbar-inverse navbar-static-top">
        <div className="container bootstrap snippets bootdey">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-toggle"></span>
            </button>
            <a className="navbar-brand" href="#">
              Application
            </a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  href="#"
                >
                  <i className="glyphicon glyphicon-user"></i> Admin{' '}
                  <span className="caret"></span>
                </a>
                <ul id="g-account-menu" className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">My Profile</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-lock"></i> Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="container bootstrap snippets bootdey">
        {/* Upper Section */}
        <div className="row">
          <div className="col-md-3">
            {/* Left */}
            <a href="#">
              <strong>
                <i className="glyphicon glyphicon-briefcase"></i> Toolbox
              </strong>
            </a>
            <hr />
            <ul className="nav nav-pills nav-stacked">
              <li>
                <a href="/">
                  <i className="glyphicon glyphicon-flash"></i> Home
                </a>
              </li>
              <li className="dropdown">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="glyphicon glyphicon-link"></i> Links{' '}
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/sofa-sets">Sofa Sets</a>
                  </li>
                  <li>
                    <a href="/corner-sofas">Corner Sofas</a>
                  </li>
                  <li>
                    <a href="/sofas">Sofas</a>
                  </li>
                </ul>
              </li>

              
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-list-alt"></i> Reports
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-book"></i> Books
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-briefcase"></i> Tools
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-time"></i> Real-time
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="glyphicon glyphicon-plus"></i> Advanced..
                </a>
              </li>
            </ul>
            <hr />
          </div>
          <div className="col-md-9">
            {/* Column 2 */}
            <a href="#">
              <strong>
                <i className="glyphicon glyphicon-dashboard"></i> My Dashboard
              </strong>
            </a>
            <hr />
            <div className="row">
              {/* Center Left */}
              <div className="col-md-7">
                <div className="well">
                  Inbox Messages <span className="badge pull-right">3</span>
                </div>
                <hr />
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4>Processing Status</h4>
                  </div>
                  <div className="panel-body">
                    <small>Complete</small>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-success"
                        role="progressbar"
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '72%' }}
                      >
                        <span className="sr-only">72% Complete</span>
                      </div>
                    </div>
                    <small>In Progress</small>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow="20"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '20%' }}
                      >
                        <span className="sr-only">20% Complete</span>
                      </div>
                    </div>
                    <small>At Risk</small>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-danger"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: '80%' }}
                      >
                        <span className="sr-only">80% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Center Right */}
              <div className="col-md-5">
                <ul className="nav nav-justified">
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-cog"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-heart"></i>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="glyphicon glyphicon-comment"></i>
                      <span className="count">3</span>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="#">1. Is there a way..</a>
                      </li>
                      <li>
                        <a href="#">2. Hello, admin. I would..</a>
                      </li>
                      <li>
                        <a href="#">
                          <strong>All messages</strong>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="glyphicon glyphicon-user"></i>
                    </a>
                  </li>
                  <li>
                    <a title="Add Widget" data-toggle="modal" href="#addWidgetModal">
                      <span className="glyphicon glyphicon-plus-sign"></span>
                    </a>
                  </li>
                </ul>
                <hr />
                <p>
                  This is a responsive dashboard-style layout that uses{' '}
                  <a href="http://www.getbootstrap.com">Bootstrap 3</a>. You can
                  use this template as a starting point to create something more
                  unique.
                </p>
                <hr />
                <div className="btn-group btn-group-justified">
                  <a href="#" className="btn btn-info col-sm-3">
                    <i className="glyphicon glyphicon-plus"></i>
                    <br />
                    Service
                  </a>
                  <a href="#" className="btn btn-info col-sm-3">
                    <i className="glyphicon glyphicon-cloud"></i>
                    <br />
                    Cloud
                  </a>
                  <a href="#" className="btn btn-info col-sm-3">
                    <i className="glyphicon glyphicon-cog"></i>
                    <br />
                    Tools
                  </a>
                  <a href="#" className="btn btn-info col-sm-3">
                    <i className="glyphicon glyphicon-question-sign"></i>
                    <br />
                    Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Upper Section */}
      </div>
    </div>
  );
};

export default Dashboard;
