import React from 'react'
import fire from './config/fire';
import DataTable from './dataTable';


class Home extends React.Component {

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand">HomePage</a>
                            <form className="d-flex">
                            <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                            </form>
                        </div>
                    </nav>
                </div>

                <h1>Contacts</h1>
                <p><DataTable/></p>
            </div>
        )
    }
}

export default Home;