const mark =
  "M0 0h256v64H64v64h192v192H0v-64h192v-64H0zM320 0h192v64H384v64h128v64H384v128h-64zM512 64h64v64h-64zM448 192h64v64h-64zM512 256h64v64h-64z"

export function SiteMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 320"
      aria-hidden
      {...props}
    >
      <path fill="currentColor" d={mark} />
    </svg>
  )
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 320"><path fill="${color}" d="${mark}"/></svg>`
}
