// import React, { useState } from 'react'
// import { StyleProvider } from '@repay/saguaro-web';
// import { Box, Button, Card, Divider, Grid, GridItem, Icon, Layout, Modal, Notification, Sidebar, Text, TextInput, TitleBar } from '@repay/saguaro-web';
// import { useNavigate, Link } from 'react-router-dom';
// const Defiscreen = () => {

//     const loanaccounts = [
//         {
//             "vehicle": "2023 Toyota Camri",
//             "status": "Acc..2324(Active Retail)",
//             "next_due_payment": "4000",
//             "next_due_date": "07/04/2023",
//             "last_paid_amount": "2000",
//             "last_paid_date": "04/06/2023",
//         },
//     ]

//     return (
//         <div>
//             <StyleProvider>
//                 <Box
//                     backgroundColor="brown"
//                     borderColor="white"
//                     borderRadius="none"
//                     borderStyle="solid"
//                     borderWidth="2px"
//                     color="white"
//                     display="inline-flex"
//                     fontSize="subtitle"
//                     height=""
//                     maxHeight=""
//                     maxWidth="100%"
//                     minHeight="10px"
//                     padding="10px"
//                     position="relative"
//                     width="100%"
//                 >
//                     <div style={{
//                         marginLeft: "20%",
//                         alignSelf: "center",
//                         marginLeft:'540px'
//                     }}>
//                         <Text
//                             color="white"
//                             fontSize="bold"
//                             fontStyle="plain"
//                             margin="xs"
//                         >
//                             Dummy project
//                         </Text>
//                     </div>

//                 </Box>
//                 {loanaccounts.map((items) => {

//                     return (<Card
//                         maxWidth="500px"
//                         shadow="always"
//                         size="lg"
//                         padding="10px"
//                         marginTop="50px"
//                         marginLeft='380px'
//                     > 
//                     <div
//                     style={{
//                       border: '1px dashed black',
//                       padding:'20px',
//                     }}
//                   >
//                     Card
//                   </div>
//                         <Grid
//                             cols={2}
//                             rows={4}
//                         >
//                             <GridItem>
//                                 {items.vehicle}
//                                 <Grid
//                                     cols={1}
//                                     rows={1}
//                                 >

//                                     <Text
//                                         color="grey"
//                                         fontSize="small"
//                                         fontStyle="plain"
//                                         margin="xs"
//                                     >
//                                         {items.status}
//                                     </Text>
//                                 </Grid>

//                             </GridItem>
//                             <GridItem >
//                                 {/* <Button
//                                     data-state="active"
//                                     status="default"
//                                     variant="text"
//                                     onClick={()=>{handleClick()}}
//                                 > */}

//                                 {/* </Button> */}
//                             </GridItem>
//                             <GridItem >
//                                 <Text
//                                     color="grey"
//                                     fontSize="small"
//                                     fontStyle="plain"
//                                     margin="xs"
//                                 >
//                                     Next Due Payment Amount Date
//                                 </Text>
//                                 <Divider />
//                                 <Text
//                                     color="black"
//                                     fontSize="small"
//                                     fontStyle="bold"
//                                     margin="md"
//                                 >
//                                     ${items.next_due_payment}
//                                 </Text>

//                                 <Divider />
//                                 <Text
//                                     color="grey"
//                                     fontSize="small"
//                                     fontStyle="plain"
//                                     margin="xs"
//                                 >
//                                     {items.next_due_date}
//                                 </Text>

//                             </GridItem>
                            
//                             <GridItem>
//                                 <Text
//                                     color="grey"
//                                     fontSize="small"
//                                     fontStyle="plain"
//                                     margin="xs"
//                                 >
//                                     Last paid Amount and date
//                                 </Text>

//                                 <Divider />
//                                 <Text
//                                     color="black"
//                                     fontSize="body"
//                                     fontStyle="plain"
//                                     margin="md"
//                                 >
//                                     ${items.last_paid_amount}
//                                 </Text>

//                                 <Divider />
//                                 <Text
//                                     color="grey"
//                                     fontSize="small"
//                                     fontStyle="plain"
//                                     margin="xs"
//                                 >
//                                     {items.last_paid_date}
//                                 </Text>

//                             </GridItem>
//                             <GridItem>
//                                 <Button
//                                     style={{ backgroundColor: '#e0a116' }}
//                                     status="default"
//                                     variant="standard"
//                                     color='yellow'
//                                     marginTop='30px'
//                                     marginLeft='140px'
//                                 >
//                                     Pay now
//                                 </Button>
//                             </GridItem>

//                         </Grid>
//                         <Grid
//                             cols={1}
//                             rows={1}
//                         >

//                             <Text
//                                 color="grey"
//                                 fontSize="small"
//                                 fontStyle="italic"
//                                 margin="xs"
//                             >
//                                 *The amount and date are subject to change
//                             </Text>
//                         </Grid>
//                     </Card>
//                     )
//                 })}
//                 <Button marginLeft='560px'>welcome</Button>
//             </StyleProvider>
//         </div>
//     );
// }

// export default Defiscreen