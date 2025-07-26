import {useEffect, useRef} from "react";
import {Editor as TinyMCE} from '@tinymce/tinymce-react';
import type {Editor as TinyMCEType} from 'tinymce';
import style from './Editor.module.scss'
import {Button} from "@/components/ui/button";

type Plugins = 'advlist' | 'autolink' | 'lists' | 'link' | 'image' | 'charmap' | 'preview' |
    'anchor' | 'searchreplace' | 'visualblocks' | 'code' | 'fullscreen' |
    'insertdatetime' | 'media' | 'table' | 'help' | 'wordcount'


type Toolbar = 'undo' | 'redo' | 'blocks' | 'bold' | 'italic' | 'forecolor' | 'alignleft' | 'aligncenter' |
    'alignright' | 'alignjustify' | 'bullist' | 'numlist' | 'outdent' | 'indent' |
    'removeformat' | 'help'

interface Props {
    className?: string;
    height?: string;
    menubar?: boolean;
    plugins?: Plugins[];
    toolbar?: Toolbar[];
    fontFamily?: string;
    fontSize?: number;
    initialValue: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
    onOpenModal: () => void
}


const Editor = ({
                    fontFamily = 'Helvetica, Arial, sans-serif',
                    fontSize = 14,
                    plugins,
                    toolbar,
                    height,
                    menubar,
                     initialValue, setState,
    onOpenModal
                }: Props) => {
    useEffect(() => {
        console.log(style)
    }, []);

    const editorRef = useRef<TinyMCEType | null>(null);
    const handleSubmitEditor = () => {
        if (editorRef.current) {
            const body = editorRef.current.getContent() as string;
            setState(body);
            onOpenModal()


        }
    }
    return (
        <>
            <TinyMCE
                apiKey='02agqvxvq8cscm6dn7crdujjhi967pl0zdu9gof5et9ni1f3'
                onInit={(_evt, editor) => editorRef.current = editor}
            initialValue={initialValue}
                init={{
                    content_style: `body { font-family: ${fontFamily}; font-size: ${fontSize}px}`,
                    plugins,
                    toolbar,
                    height,
                    menubar,
                    skin: true

                }}
            />
            <Button onClick={handleSubmitEditor}>
                Создать
            </Button>
        </>
    );
};
export default Editor