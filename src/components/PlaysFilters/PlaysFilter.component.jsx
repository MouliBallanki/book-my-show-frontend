import React from 'react'
import { Disclosure } from '@headlessui/react';
import {BiChevronDown , BiChevronUp} from "react-icons/bi"
const  PlaysFilter = (props) => {
    return (
      <Disclosure>
          {
                ({open}) => (
                    <>
                    <Disclosure.Button className="py-2 flex items-center gap-2">
                        {open ?<BiChevronUp/>:<BiChevronDown/>}
                        <span className={open ?"text-red-600":"text-gray-700" }>{props.title}</span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500">
                        <div className="flex items-center gap-3 flex-wrap">
                            {
                                props.tags.map((tag) => 
                                    <>
                                        <div className="border-2 px-3 py-1 border-gray-200"> 
                                            <span className="text-red-600">{tag}</span>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    </Disclosure.Panel>
                    </>
              )
            
          }
      </Disclosure>
    )
  }
export default PlaysFilter;