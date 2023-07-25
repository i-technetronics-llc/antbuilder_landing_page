
const HeaderContentSection = ({ header, children }) => {
    return (
        <section className='space-y-4'>
            <h2 className='text-4xl text-gray-700 dark:text-gray-200'>{header}</h2>
            {children}
        </section>
    );
};


export default HeaderContentSection