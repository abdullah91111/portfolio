import Image, { getImageProps as nextGetImageProps, type ImageProps } from "next/image";
import { asset } from "@/lib/asset";
export default function PortfolioImage(props: ImageProps) {
 return <Image {...props} alt={props.alt} src={typeof props.src === "string" ? asset(props.src) : props.src} />;
}
export function getImageProps(props: ImageProps) {
 return nextGetImageProps({...props, unoptimized:true, src: typeof props.src === "string" ? asset(props.src) : props.src});
}
