import React from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share";

export default function SocialShareButtons() {
  return (
    <div>
      <FacebookShareButton url="">
        <FacebookIcon logoFillColor="white" round="true" size={40} />
      </FacebookShareButton>
      &nbsp;
      <EmailShareButton url="">
        <EmailIcon logoFillColor="white" round="true" size={40} />
      </EmailShareButton>
      &nbsp;
      <WhatsappShareButton url="">
        <WhatsappIcon logoFillColor="white" round="true" size={40} />
      </WhatsappShareButton>
      &nbsp;
      <PinterestShareButton url="">
        <PinterestIcon logoFillColor="white" round="true" size={40} />
      </PinterestShareButton>
      &nbsp;
      <TwitterShareButton url="">
        <TwitterIcon logoFillColor="white" round="true" size={40} />
      </TwitterShareButton>
    </div>
  );
}
