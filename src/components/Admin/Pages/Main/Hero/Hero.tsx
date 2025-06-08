"use client"
import Container from "@/src/components/ui/Container/Container";
import style from "@/src/components/Admin/Pages/Main/Hero/Hero.module.scss";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea"

export interface HeroProps {
}

const Hero = ({}: HeroProps) => {
 const [title, setTitle] = useState<string>("Гідравлічні\n" +
     "             преси для макулатури та твердих побутових відходів")
    return (
        <>
         <Container>
          <div className='mt-10'>
           <div className='flex flex-col items-center'>
            <h1 className={`${style.titleHero} text-center font-bold uppercase `}>{title}</h1>
            <Popover>
             <PopoverTrigger asChild>
              <Button className='w-25' variant='outline'>Редактировать</Button>
             </PopoverTrigger>
             <PopoverContent>
              <div className="">
               <Label htmlFor="maxWidth">Max. width</Label>
               <Textarea value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
             </PopoverContent>
            </Popover>
           </div>
           <div className='flex mt-10 '>
            <div className='w-1/2'>
             <img className='w-[420px] h-[270px] mx-auto'
                  src='/images/mainImage.png'
                  alt=''
             />
            </div>
            <div className='flex flex-col w-1/2'>
             <p className={style.description}>З 2009 року наша компанія є одним з найбільших виробників
              вантажопідйомного обладнання на ринку України. Ми розробляємо,
              виробляємо, встановлюємо, модернізуємо і обслуговуємо
              вантажопідйомне обладнання.</p>
             <p className={`${style.description} mt-7`}>Контроль якості – один з головних принципів
              виробництва
              вантажопідйомного обладнання на нашому підприємстві</p>
             <button className={`${style.button} w-[350px] h-[62px] mt-10  font-bold uppercase flex items-center justify-center gap-3`}
                     type='button'
             >
              {/*<PhoneIconGrey/>*/}
              Замовити дзвінок
             </button>
            </div>
           </div>
          </div>
         </Container>
        </>
    );
};
export default Hero;
