'use client';

import BgNoise from '@/app/_components/common/BgNoise';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion, Variants } from 'motion/react';
import { useState } from 'react';
import MenuBg from './MenuBg';
import MenuContact from './MenuContact';
import MenuNav from './MenuNav';

export default function Menu() {
  const [open, setOpen] = useState(false);

  const MENU_REVIEW: Variants = {
    show: {
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
      transition: { duration: 0.6, ease: 'easeIn' },
    },
    hidden: {
      clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Abrir menu"
          className="type-xl text-primary pointer-events-auto cursor-pointer"
        >
          Menu
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* overlay */}
            <Dialog.Overlay asChild forceMount>
              <motion.div
                variants={MENU_REVIEW}
                initial={'hidden'}
                exit={'hidden'}
                animate={open ? 'show' : 'hidden'}
                className="bg-tertiary fixed inset-0 z-40"
              >
                <BgNoise />
              </motion.div>
            </Dialog.Overlay>

            {/* content */}
            <Dialog.Content asChild forceMount>
              <motion.div
                variants={MENU_REVIEW}
                initial={'hidden'}
                exit={'hidden'}
                animate={open ? 'show' : 'hidden'}
                className="gap-x-base px-base fixed inset-0 z-50 grid lg:grid-cols-12"
              >
                <Dialog.Title className="sr-only">
                  Menu de navegação
                </Dialog.Title>

                {/* close button */}
                <Dialog.Close asChild className="top-base right-base absolute">
                  <button
                    type="button"
                    aria-label="Fechar menu"
                    className="type-xl text-primary pointer-events-auto cursor-pointer"
                  >
                    Fechar
                  </button>
                </Dialog.Close>

                {/* bg */}
                <MenuBg />

                {/* links */}
                <div className="pl-base pb-base col-span-full col-start-7 flex flex-col justify-between pt-[calc((var(--spacing-base)*2)+var(--spacing-type-xl))]">
                  {/* nav */}
                  <MenuNav />

                  {/* contact */}
                  <MenuContact />
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
