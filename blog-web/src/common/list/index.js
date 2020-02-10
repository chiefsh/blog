import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {
    ListWrapper,
    UlWrapper,
    LiWrapper,
    ItemLeft,
    ItemRight,
    PageSeek,
    PageNumWrapper,
    PageNum,
    PageNext
} from './style';

class List extends Component {

    constructor(props) {
        super(props);
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    render() {
        const {article_list, page_total, currentPage, page_size} = this.props;
        const total_page = Math.ceil(page_total/page_size);
        let pageList = [];
        if (currentPage + 1 < total_page) {
            for (var i = 1; i <= currentPage + 1; i++){
                pageList.push(i);
            }
            if (currentPage + 2 >= total_page) {
                pageList.push(total_page);
            }else {
                pageList.concat(['...', total_page])
            }
        }else {
            for (var i = 1; i <= total_page; i++){
                pageList.push(i);
            }
        }
        if (pageList.length === 0) {
            pageList = [0]
        }
        return(
            <ListWrapper>
                <UlWrapper>
                    {
                        article_list.map((item) => (
                            <Link to={'/detail/' + item.get('id')} key={item.get('id')}>
                               <LiWrapper>
                                    <ItemLeft>{item.get('title')}</ItemLeft>
                                    <ItemRight>{item.get('created')}</ItemRight>
                               </LiWrapper>
                            </Link>
                        ))
                    }
                </UlWrapper>
                <PageSeek>
                    <PageNumWrapper>
                        {
                            pageList.map((item) => (
                                <PageNum 
                                  className={currentPage == item ? 'current' : ''}
                                  key={item} 
                                  onClick={() => this.handleChangePage(item, currentPage, total_page)}
                                >{item}</PageNum>
                            ))
                        }
                       <PageNext>{">"}</PageNext>
                    </PageNumWrapper>
                </PageSeek>
            </ListWrapper>
        );
    }

    handleChangePage(item, currentPage, total_page) {
        let page = currentPage;
        if (item === '>') {
            if (currentPage < total_page) {
                page = page +  1;
            }
        }
        if (!isNaN(item)) {
            page = parseInt(item);
        }
        this.props.selectPage(this.props.id, page);
    }

}

export default List;