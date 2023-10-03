import React from 'react';

const Newsletter = () => {
    return (
        <section>
            <div className='pt-8 pb-4 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:pb-4 lg:px-6'>
                <div className='mx-auto max-w-screen-md sm:text-left'>
                    <h2 className='mb-4 text-sm sm:text-md tracking-tight font-semibold text-gray-900'>
                        Get notified when we launch
                    </h2>
                    <form action='#'>
                        <div className='items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0'>
                            <div className='relative w-full'>
                                <label
                                    htmlFor='email'
                                    className='hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                                >
                                    Email address
                                </label>
                                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                                    <svg
                                        className='w-5 h-5 text-gray-500 dark:text-gray-400'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                                    </svg>
                                </div>
                                <input
                                    className='block p-3 pl-10 w-64 sm:w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 '
                                    placeholder='Enter your email'
                                    type='email'
                                    id='email'
                                    required=''
                                />
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='py-3 px-5 w-full text-sm font-medium text-center text-white bg-zinc-800 rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 '
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
