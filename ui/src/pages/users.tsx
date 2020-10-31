import dynamic from 'next/dynamic'
const Measurement = dynamic(import('../components/measurement/ViewData'), { ssr: false })

export default Measurement