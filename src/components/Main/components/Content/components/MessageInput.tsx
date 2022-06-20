import React from "react";
import {useAppSelector} from "../../../../../hooks";
import {shallowEqual} from "react-redux";
import {writeMessage} from "../../../../../firebase";

export default function MessageInput() {

    const userId = useAppSelector(state => state.login.uid)

    const channelObject: { name: string | null, id: string | null } = useAppSelector(state => {
        if (state.active.levelTwo in state.channel.entities) {
            return {
                name: state.channel.entities[state.active.levelTwo].name,
                id: state.channel.entities[state.active.levelTwo].id
            };
        } else {
            return {
                name: state.active.levelTwo,
                id: null,
            }
        }
    }, shallowEqual);

    return (
        <textarea placeholder={`Message #${channelObject.name}`}
                  onKeyDown={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {

                      const target = event.target as HTMLTextAreaElement;

                      if (event.key === 'Enter' && !event.shiftKey
                          && channelObject.name !== null
                          && channelObject.id !== null
                      ) {

                          const today = new Date();

                          const messagePayload = {
                              channelId: channelObject.id,
                              userId: userId,
                              text: target.value,
                              year: today.getFullYear(),
                              month: today.getMonth(),
                              day: today.getDate(),
                              hour: today.getHours(),
                              minute: today.getMinutes(),
                              second: today.getSeconds()
                          };

                          writeMessage(messagePayload).then(() => {
                              console.log('done sending message to firebase')
                              target.value = "";
                          }).catch((e) => console.error(e));

                      }
                  }}
                  onInput={(event: React.KeyboardEvent<HTMLTextAreaElement>) => {
                      const target = event.target as HTMLTextAreaElement;

                      target.style.height = "";
                      target.style.height = `calc(${target.scrollHeight}px)`;
                  }}


                  className='bg-chat-box-search-bar-main m-5 min-h-[2.5rem] max-h-[50vh] h-[2.5rem] box-border
               rounded-lg px-5 text-white text-sm placeholder-inactive-light-grey focus:outline-0
               overflow-hidden resize-none py-2'></textarea>
    )


}