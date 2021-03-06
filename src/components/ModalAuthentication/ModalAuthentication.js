import React from 'react'
import { connect } from 'react-redux'
import { Button, Divider, Grid, Icon, Modal, Segment } from 'semantic-ui-react'
import { FACEBOOK_AUTH_LINK, GOOGLE_AUTH_LINK } from '../../config/config'
import FormLogin from '../FormLogin/FormLogin'
import FormRegister from '../FormRegister/FormRegister'
import './ModalAuthentication.css'



const ModalAuthentication = ({ open, trigger }) => {

   return (
      <Modal open={open} trigger={trigger}>
         <Modal.Header>Welcome</Modal.Header>
         <Modal.Content>
            <Segment>
               <Grid columns={2} stackable>
                  <Divider vertical>Or</Divider>
                  <Grid.Row>
                     <Grid.Column>
                        <FormRegister />
                     </Grid.Column>

                     <Grid.Column>
                        <FormLogin />
                        <Divider horizontal>Or Sign in with socials</Divider>
                        <Segment>
                           <Button color='facebook' onClick={() => window.location.href = FACEBOOK_AUTH_LINK}>
                              <Icon name='facebook' /> Facebook
                           </Button>
                           <Button color='google plus' onClick={() => window.location.href = GOOGLE_AUTH_LINK}>
                              <Icon name='google' /> Google
                           </Button>
                        </Segment>
                     </Grid.Column>
                  </Grid.Row>
               </Grid>
            </Segment>
         </Modal.Content>
      </Modal>
   )
}

const mapStateToProps = (state) => {
   return {};
}

export default connect(mapStateToProps, {})(ModalAuthentication)

