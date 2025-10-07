'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { toast } from 'sonner';

import { sendEmailAction } from '@/actions/send-email';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { formSchema, TFormSchema } from '@/lib/form-schema';
import { cn } from '@/lib/utils';

export const Contact = () => {
  const { ref } = useSectionInView('Contact');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (values: TFormSchema) => {
    const { data, error } = await sendEmailAction(values);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success(data);
    reset();
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative my-16 w-full scroll-mt-28 md:mb-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 opacity-20 rounded-xl blur-3xl"></div>

      <SectionHeading
        heading="Get In Touch"
        content={
          <>
            Please contact me directly at{' '}
            <Button
              variant="link"
              className="text-muted-foreground hover:text-foreground h-fit p-0 font-medium underline transition-colors"
              asChild
            >
              <Link href="mailto:thigshiccavignesh@gmail.com">
                thigshiccavignesh@gmail.com
              </Link>
            </Button>{' '}
            or through this form.
          </>
        }
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mx-auto mt-8 flex max-w-2xl flex-col gap-6 rounded-xl bg-white/70 p-8 shadow-lg backdrop-blur-md sm:p-10"
      >
        {/* Email Field */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className={cn(
              'mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200',
              errors.email?.message && 'text-red-500'
            )}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="hello@gmail.com"
            {...register('email')}
            className={cn(
              'rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-purple-300/40 disabled:opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600',
              errors.email?.message && 'border-red-500'
            )}
          />
          {errors.email?.message && (
            <p className="mt-1 text-sm text-red-500">{errors.email?.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className={cn(
              'mb-2 text-sm font-semibold text-gray-700 dark:text-gray-200',
              errors.message?.message && 'text-red-500'
            )}
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Hello! What's up?"
            {...register('message')}
            className={cn(
              'rounded-md border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:border-purple-500 focus:ring focus:ring-purple-300 focus:ring-purple-300/40 disabled:opacity-50 dark:bg-gray-800 dark:text-white dark:border-gray-600 resize-none h-48',
              errors.message?.message && 'border-red-500'
            )}
          />
          {errors.message?.message && (
            <p className="mt-1 text-sm text-red-500">
              {errors.message?.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          size="lg"
          className="self-start bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 hover:bg-purple-700 text-black px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          Submit <Icons.arrowRight className="size-4" />
        </Button>
      </form>
    </motion.section>
  );
};
