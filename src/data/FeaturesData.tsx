import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiDollar, BiSupport } from 'react-icons/bi';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { GrHostMaintenance } from 'react-icons/gr';
import { IoIosOptions } from 'react-icons/io';

export const featuresData = [
  {
    name: 'Best Security',
    description:
      'We offer the best data security to our clients, which makes us stand out',
    icon: <BsFillShieldLockFill />,
    imgClass: 'one',
  },
  {
    name: 'Ease of Use',
    description: 'Our system is easy to use and integrate',
    icon: <IoIosOptions />,
    imgClass: 'two',
  },
  {
    name: 'Maintenance',
    description:
      'Our code is written in highest standards, which makes it highly sustainable',
    icon: <GrHostMaintenance />,
    imgClass: 'three',
  },
  {
    name: '24/7 Support',
    description: 'Our team is available at all times in case you need us',
    icon: <BiSupport />,
    imgClass: 'four',
  },
  {
    name: 'Price',
    description: 'We offer the highest value/cost ratio',
    icon: <BiDollar />,
    imgClass: 'five',
  },
  {
    name: 'Scalable',
    description:
      'Our servers are located all over the world, therefore improving scalability and speed ',
    icon: <AiOutlineCloudUpload />,
    imgClass: 'six',
  },
];
