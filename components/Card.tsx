import Image from './Image'
import Link from './Link'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

const Card = ({ title, description, imgSrc, href, githubLink }) => (
  <div className="p-4">
    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700 shadow-md flex flex-col">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-40 md:h-28"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-40 md:h-28"
          width={544}
          height={306}
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-5 prose text-gray-700 max-w-none dark:text-gray-300">{description}</p>
        <div className="mt-auto flex items-center justify-center space-x-7">
          {githubLink && (
            <Link
              href={githubLink}
              className="hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}'s github repo'`}
            >
              <div className="flex items-center flex-col space-y-2">
                <AiFillGithub className="text-3xl lg:text-4xl" />
                <p className="text-primary-500">Github Repo</p>
              </div>
            </Link>
          )}
          {href && (
            <Link
              href={href}
              className="hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              <div className="flex items-center flex-col space-y-2">
                <FiExternalLink className="text-3xl lg:text-4xl" />
                <p className="text-primary-500">Demo Website</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
