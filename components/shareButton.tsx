'use client'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from 'react-share'
import { SocialIcon } from 'react-social-icons'

interface ShareButtonProps {
  url: string
  title: string
}

const ShareButton = ({ url, title }: ShareButtonProps) => {
  return (
    <div className="flex items-center space-x-4">
      <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Share this post:</p>
      <FacebookShareButton url={url}>
        <SocialIcon network="facebook" style={{ height: 32, width: 32 }} />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <SocialIcon network="twitter" style={{ height: 32, width: 32 }} />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <SocialIcon network="linkedin" style={{ height: 32, width: 32 }} />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title}>
        <SocialIcon network="whatsapp" style={{ height: 32, width: 32 }} />
      </WhatsappShareButton>
    </div>
  )
}

export default ShareButton
