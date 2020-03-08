import React, { Component } from 'react';
import data from './data/posts.json'; 
import Card from 'react-bootstrap/Card';

class ApiCards extends Component {
	render() {
		return (
            <div>
                {
                  data.map((Apis) => {
                    return (           
                       
                          <div class="card mb-4 box-shadow" style={{ width: '18rem' }}>
                            <Card >
                                <Card.Body>
                                  <Card.Title>{Apis.title}</Card.Title>
                                  <Card.Text>
                                    {Apis.description}
                                  </Card.Text>
                                  <div><Card.Link href="/{Apis.intro}">Intro</Card.Link></div>
                                  <div><Card.Link href="/{Apis.guide}">Developer Guide</Card.Link></div>
                                  <div><Card.Link href="/{Apis.ref}">API Referencse</Card.Link></div>
                                </Card.Body>
                              </Card>
                          </div>
                        
                    );
                  })
                } 
            </div>
        );
    }
} 
export default ApiCards;