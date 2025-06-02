import { FC } from 'react'

interface Props {
  className?: string
  width?: string
  height?: string
  color?: string
  loopCount?: number
}

const DoodleLine: FC<Props> = ({
  className,
  width = '100%',
  height = '50px',
  color = 'text-fm-green',
  loopCount = 7,
}) => {
  const generatePath = (count: number) => {
    let path = 'M0,25 '
    const loopWidth = 300 / count

    for (let i = 0; i < count; i++) {
      const startX = i * loopWidth
      const midX = startX + loopWidth / 2
      const endX = startX + loopWidth

      path += `C${startX + loopWidth / 4},0 ${
        midX - loopWidth / 4
      },50 ${midX},25 `
      path += `C${midX + loopWidth / 4},0 ${
        endX - loopWidth / 4
      },50 ${endX},25 `
    }

    return path
  }

  return (
    <div className={className} aria-hidden='true'>
      <svg
        width={width}
        height={height}
        viewBox='0 0 300 50'
        xmlns='http://www.w3.org/2000/svg'
        className={color}
        preserveAspectRatio='xMidYMid meet'>
        <path
          d={generatePath(loopCount)}
          fill='none'
          className='stroke-current'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'></path>
      </svg>
    </div>
  )
}

export default DoodleLine
