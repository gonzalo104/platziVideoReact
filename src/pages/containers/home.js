import React, { Component } from 'react';
import HomeLayout from '../components/home.layout';
import Categories from '../../categories/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';
import {connect} from 'react-redux';

class Home extends Component {

    state = {
        modalVisible: false,
        media       : [],
    }

    handleCloseModal = (event) => {
        this.setState({modalVisible: false});
    }

    handleOpenModal = (media) => {
        this.setState({modalVisible: true, media});
    }    

    render() {       
        return (    
            <HandleError>
                  <HomeLayout>
                    <Related/>                   
                    <Categories categories={this.props.categories} handleOpenModal={this.handleOpenModal} search={this.props.search}/>
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                         <Modal handleClick={this.handleCloseModal}>
                            <VideoPlayer src={this.state.media.src} title={this.state.media.title} autoplay={true}/>
                        </Modal>                        
                        </ModalContainer>
                    }                    
                </HomeLayout>
            </HandleError>                  
        );
    }
}

const mapStateToProps = (state, props) => {
    const categories = state.get('data').get('categories').map((categoryId) => {
        return state.get('data').get('entities').get('categories').get(categoryId);
    })
    return {
        categories,
        search: state.get('data').get('search'),
    }
}

export default connect(mapStateToProps)(Home);