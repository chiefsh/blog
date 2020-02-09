import React, {Component} from 'react';
import {
    GroupWrapper,
    TitleWrapper,
    GroupList,
    UlList,
    GroupItem,
    Title
} from './style';

class Group extends Component {
    render() {
        return(
          <GroupWrapper>
              <TitleWrapper>
                  <Title>目前共计6个分类</Title>
              </TitleWrapper>
              <GroupList>
                  <UlList>
                      <GroupItem><i>python</i>(14)</GroupItem>
                      <GroupItem><i>前端</i>(14)</GroupItem>
                      <GroupItem><i>lua</i>(14)</GroupItem>
                      <GroupItem><i>react</i>(14)</GroupItem>
                      <GroupItem><i>mysql</i>(14)</GroupItem>
                  </UlList>
              </GroupList>
          </GroupWrapper>
        );
    }
}

export default Group;