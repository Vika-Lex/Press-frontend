"use client"
import Container from "@/src/components/ui/Container/Container";
import style from "@/src/components/Admin/Pages/Main/Hero/Hero.module.scss";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import Editor from "@/src/components/ui/Editor/Editor";
import Modal from "@/src/components/ui/Modal/Modal";

export interface HeroProps {
    page: {
        title: string,
        description: string,
        button: string
    }
}

const Hero = ({page}: HeroProps) => {
    const [title, setTitle] = useState<string>(page.title)
    const [titleButton, setTitleButton] = useState<string>(page.button);
    const [description, setDescription] = useState<string>(page.description)

    const [onModal, setOnModal] = useState<boolean>(false);
    const [currentContent, setCurrentContent] = useState<string>('')



    const onOpenModal = () => {
        setOnModal(!onModal)
    }


    return (
        <>
            <Container>
                <div className='mt-10 '>
                    <div className='flex flex-col items-center'>
                        <h1 className=''>Проверка таилвинд</h1>
                        <div dangerouslySetInnerHTML={{__html: title}}/>
                        <Button className='w-25'
                                onClick={() => {
                                    setCurrentContent(title)
                                    onOpenModal()
                                }}
                                variant='outline'
                        >Редактировать</Button>

                        {onModal && (
                            <Modal onOpenModal={onOpenModal}>
                                <Editor setState={setTitle} initialValue={currentContent} plugins={['code']} onOpenModal={onOpenModal}/>
                            </Modal>
                        )}
                    </div>
                    <div className='flex mt-10 '>
                        <div className='w-1/2'>
                            <img className='w-[420px] h-[270px] mx-auto'
                                 src='/images/mainImage.png'
                                 alt=''
                            />
                        </div>
                        <div className='flex flex-col w-1/2'>
                            <Button className='w-25'
                                    onClick={()=> {
                                        setCurrentContent(description);
                                        onOpenModal()
                                    }}
                                    variant='outline'
                            >Редактировать</Button>
                            {onModal && (
                                <Modal onOpenModal={onOpenModal}>
                                    <Editor setState={setDescription} initialValue={currentContent} plugins={['code']} onOpenModal={onOpenModal}/>
                                </Modal>
                            )}
                            <div dangerouslySetInnerHTML={{__html:description}}/>


                            <div className='flex flex-col '>
                                <div dangerouslySetInnerHTML={{__html: titleButton}}/>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button className='w-[150px] mt-2 ml-[100px]'
                                                variant='outline'
                                        >Редактировать</Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="">
                                            <Label htmlFor="maxWidth">Max. width</Label>
                                            <Textarea value={titleButton}
                                                      onChange={(e) => setTitleButton(e.target.value)}
                                            />
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Hero;
