window._genesys = {
    widgets: {
      main: {
                preload: ['webchat'],
            },
      webchat: {
        chatButton: {
            enabled: true, // (boolean) Enable/disable chat button on screen.
          },
        transport: {
          type: 'purecloud-v2-sockets',
          dataURL: 'https://api.usw2.pure.cloud',     // replace with API URL matching your region
          deploymentKey : '87d6faca-7ef4-40a0-9e11-1c3850cb0401',  // replace with your Deployment ID
          orgGuid : '56ee736b-1261-4cd2-83d7-42b362223318',              // replace with your Organization ID
          interactionData: {
            routing: {
              targetType: 'QUEUE',
              targetAddress: 'Schofield Support Queue',
              priority: 2
            }
          }
        },
        userData: {
          addressStreet: '64472 Brown Street',
          addressCity: 'Lindgrenmouth',
          addressPostalCode: '50163-2735',
          addressState: 'FL',
          phoneNumber: '1-916-892-2045 x293',
          phoneType: 'Cell',
          customerId: '59606',
          // These fields should be provided via advanced configuration
          // firstName: 'Praenomen',
          // lastName: 'Gens',
          // email: 'praenomen.gens@calidumlitterae.com',
          // subject: 'Chat subject'
        }
      }
    }
  };
