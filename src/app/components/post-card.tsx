/* eslint-disable @typescript-eslint/naming-convention */
'use client'

import { Card, CardHeader, CardBody, CardFooter, Avatar } from '@nextui-org/react'

interface Post {
  username: string
  avatarURL: string
  name: string
  content: string
}

export default function PostCard ({ username, avatarURL, name, content }: Post) {
  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={avatarURL} />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{username}</h5>
          </div>
        </div>

      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          {content}
        </p>
        <span className="pt-2">
          #FrontendWithZoey

        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  )
}
