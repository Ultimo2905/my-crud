import React, {Component} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import {Header} from "./Components/Header";
import {TableUsers} from "./Components/TableUsers/TableUsers";
import {AppBackend} from "./AppBackend";
import {Footer} from "./Components/Footer/Footer";
import {AddUser} from "./Components/AddUser/AddUser";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            limit: 15,
            page: 1,
            search: '',
            addUserModalVisible: false

        };
        this.backend = new AppBackend();
    }

    // async componentDidMount() {
    //     const users = await this.backend.get({limit: this.state.limit});
    //     this.setState({
    //         users
    //     });
    // }
    componentDidMount(){
        this.updateUsers();
    }


    onSelectChange = (event) => {
        const limit = event.target.value;
        this.setState({limit}, () => {
            this.updateUsers();
        })
    };

    // onSelectChange = async(limit) =>{
    //     this.setState({limit}, () =>{
    //         this.updateUsers();
    //     });
    // };


    onPageChange = (page) => {
        this.setState({page}, () => {
            this.updateUsers();
        })
    };

    onSearchChange = (value) => {
        const search = value;
        this.setState({search, page: 1}, () => {
            this.updateUsers();
        });
    };

    updateUsers = async () => {
        const {limit, search, page} = this.state;
        const users = await this.backend.get({
            search,
            limit,
            page,
        });

        this.setState({
            users
        });
    };

    deleteUser = async (id) => {
        await this.backend.delete(id);
        this.updateUsers();
    };

    onAddUserSave = (user) =>{
        console.log('=Save', user);
        this.closeAddUserModal();
    };

    closeAddUserModal = () =>{
        this.setState({addUserModalVisible: false});
    };

    render() {
        return (
            <Container>
                <button className="btn btn-primary addUserModal" onClick={() => this.setState({addUserModalVisible:true})}>Add User</button>
                <Header onSelectChange={this.onSelectChange} limit={this.state.limit} onSearchChange={this.onSearchChange}/>
                <TableUsers users={this.state.users} deleteUser={this.deleteUser} id={this.state.id}/>
                <Footer onPageChange={this.onPageChange} currentPage={this.state.page}/>

                <AddUser onSave={this.onPageChange}
                         onCancel={this.closeAddUserModal}
                         isVisible={this.state.addUserModalVisible}/>
            </Container>
        );
    }
}

export default App;





