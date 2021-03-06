import React, { Component } from 'react';
import Modal from 'react-modal';


class MyModal extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false
        }

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this)
    }

    handleOpenModal(){
        this.setState({showModal: true});
    }

    handleCloseModal(){
        this.props.clearModal();
        this.setState({showModal:false})
    }

    // componentWillReceiveProps(nextprops){
    //     if(nextprops.team !== null){
    //         this.setState({showModal: true})
    //     }
    // }

    static getDerivedStateFromProps(props,state){
        if(props.team !== null){
            return {
                showModal: true
            }
        }
        return null
    }

    
    render() {
        const team = this.props.team;
        return (
            <>
                <Modal
                    isOpen={this.state.showModal}
                    ariaHideApp={false}
                >
                    <button
                        onClick={this.handleCloseModal}
                    >
                        Close Modal
                    </button>
                    { team ?
                        <div>
                            <h3>{team.name}</h3>
                            <hr/>
                            <div>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: team.content
                                    }}
                                    className="modal_content"
                                ></div>
                            </div>
                        </div>
                    :null
                    }
                </Modal>
            </>
        )
    }
}

export default MyModal;