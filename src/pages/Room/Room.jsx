import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const Room = () => {
    const {roomId} = useParams();

    const myMeeting = async(element)=>{
        const appId = 1594368568;
        const serverSecret = "0cece5fb1c7382728f9f5d47dc395d56";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret, 
            roomId, 
            Date.now().toString(), 
        `\n`);

            const zc = ZegoUIKitPrebuilt.create(kitToken);

            zc.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: "Copy Link",
                        url: `https://video-calling-ten.vercel.app/room/${roomId}`
                    }
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
                showScreenSharingButton: true,
            })
    };


  return (
    <div>
        <div ref={myMeeting}/>
    </div>
  )
}

export default Room