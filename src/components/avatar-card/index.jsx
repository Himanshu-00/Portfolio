import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import {FaLinkedin} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai'
const AvatarCard = ({ profile, loading, avatarRing, resume, resume2 }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                width: 'w-full',
                height: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-40 h-40 ${
                avatarRing
                  ? 'ring ring-4 ring-primary ring-offset-base-100 hover:ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={profile.avatar ? profile.avatar : fallbackImage}
                  alt={profile.name}
                  placeholder={skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ width: 'w-48', height: 'h-8' })
            ) : (
              <span className="text-base-content opacity-90">
                {profile.name}
              </span>
            )}
          </h5>
          
        </div>
        {resume?.fileUrl &&
          (loading ? (
            <div>
              {skeleton({ width: '' })}
            </div>
          ) : (
            <a
              href={resume.fileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-70"
              ><FaLinkedin/>
              Linkdin
            </a>
            
          ))}
          
          
          {resume2?.fileUrl &&
          (loading ? (
            <div>
              {skeleton({ width: '' })}
            </div>
          ) : (
            <a
              href={resume2.fileUrl}
              target="_blank" //Will open target in New Tab
              className="btn btn-outline btn-sm text-xs mt-6 opacity-70"
              ><AiFillGithub/>
              GitHub
            </a>
            
          ))}
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
  resume2: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
