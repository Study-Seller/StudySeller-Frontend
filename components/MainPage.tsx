import React, { useState } from 'react';
import { Image, Menu, Input, Segment, Grid, Header, Icon, List, Button, Dropdown } from 'semantic-ui-react';
import { useRouter } from 'next/router';

import {NotionPage} from './NotionPage'
import { Footer } from './Footer';
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import * as types from '@/lib/types'

const App: React.FC <types.PageProps> = ({
  pageId
}) => {
  const [activeItem, setActiveItem] = useState('');
  const router = useRouter()
  console.log(pageId)

  console.log(router)
  if (router.pathname === "/"+pageId) {  
    
    return (
<NotionPage></NotionPage>
    );
  }
  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, { name }: { name: string }) =>
    setActiveItem(name);
  return (
    <Segment style={{ padding: 0 }}>
      <Menu style={{ backgroundColor: 'transparent', paddingTop: '3px' }} stackable inverted size='massive' fixed='top'>
        <Menu.Item style={{ fontSize: '20px', color: 'grey' }}>StudySeller</Menu.Item>
        <Dropdown
          item
          text='Categories'
          style={{ fontSize: '20px', color: 'grey' }}
          active={activeItem === 'mostComments'}
          onClick={handleItemClick}
        >
          <Dropdown.Menu>
            <Dropdown.Header>Elementary School</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
            <Dropdown.Header>Middle School</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
            <Dropdown.Header>High School</Dropdown.Header>
            <Dropdown.Item>Small</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Large</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Item
          style={{ fontSize: '20px', color: 'grey' }}
          
          name='MyPage'
          active={activeItem === 'notionpage'}
          onClick={() => router.push('/'+pageId)}
        />
        <Menu.Item
          style={{ fontSize: '20px', color: 'grey' }}
          to='/'
          name='mostPopular'
          active={activeItem === 'mostPopular'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input className='icon' icon='search' placeholder='Search...' size='large' transparent />
          </Menu.Item>
          <Menu.Item style={{ fontSize: '20px', color: 'grey' }} name='signup' active={activeItem === 'signip'} onClick={handleItemClick} href='/login'>
            Sign In
          </Menu.Item>
          <Menu.Item href='/signup'>
            <Button className='my-button'>Sign Up!</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Image src='mainPage.jpg' href='/' style={{ width: 'auto', height: 'auto', paddingRight: -10 }} />
    </Segment>
  );
};

export default App;
