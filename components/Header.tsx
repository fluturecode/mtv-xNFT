import { useMemo } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import mtv_logo from 'assets/mtv_logo.jpg';
import Image from 'next/image'

const basePaths = ['/']; // Add more paths here if needed

const MyHeader = styled.div``;
export default function Header() {
  const router = useRouter();
  const title = useMemo(() => {
    if (router.pathname !== '/') {
      const segments = router.pathname.split('/');
      return router.pathname.split('/')[segments.length - 1].replace('%20', " ");
    }
    return (
      <MyHeader>
        <Image src={mtv_logo} alt="mtv logo" className='h-20 object-contain pt-2'/>
      </MyHeader>
    );
  }, [router.pathname]);

  return (
      <div className="h-30 flex justify-center items-center gap-1 p-2">
        <div className="flex items-center gap-4">
          {!basePaths.some(base => router.pathname === base) && (
            <button onClick={() => router.back()}>
              <FaChevronLeft />
            </button>
          )}
          <h1 className="text-left text-3xl inline capitalize font-bold">
            {title}
          </h1>
        </div>
      </div>
  );
}
