'use client'
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import React from "react"


type Props = {}

const WorkFlowButton = (props: Props) => {

    const handleClick = () => {

    }
    return(
        <Button
        size={'icon'}
        onClick={handleClick}>
            <Plus/>
        </Button>
    )
}