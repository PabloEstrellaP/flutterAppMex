const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '764740802765-6s56tcbmobipq0i4mlccmv9gn128kpbo.apps.googleusercontent.com';

const client = new OAuth2Client( CLIENT_ID );

const validarGoogleToken = async ( token ) => {
    try {

        const ticket = await client.verifyIdToken({
            idToken : token,
            audience : [
                CLIENT_ID,
                '764740802765-lc9vm9q5gcs6l143dr07rg7npbjmgqdf.apps.googleusercontent.com'
            ],
        });
        const payload = ticket.getPayload();
        // console.log( payload );
    
        return {
            name : payload['name'],
            imgPath : payload['picture'],
            email : payload['email'],
        }
    } catch (error) {
        console.log(error);
        return null;
    }

    // If request specified a G Suite domain:
    // const domain = payload['hd'];  
}

module.exports = {
    validarGoogleToken
}
