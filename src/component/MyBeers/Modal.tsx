import React, { FC } from 'react';
import Image from 'next/image';
import BeerImg from '@/assets/images/beer.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';

type Props = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  beerList: Array<[]>;
  setBeerList: React.Dispatch<React.SetStateAction<Array<[]>>>;
};
const Modal: FC<Props> = ({ showModal, setShowModal, beerList, setBeerList }) => {
  return (
    <div>
      <div className={`relative ${showModal ? `beerModal show` : `hide`}`}>
        <div className=" flex flex-col gap-2 px-8 py-8">
          <div>
            <Formik
              initialValues={{ name: '', genre: '', description: '', image: BeerImg }}
              validate={(values) => {
                const errors = { name: '', genre: '', description: '' };
                let success = false;
                if (!values.name) {
                  errors.name = 'Required';
                  success = false;
                } else {
                  success = true;
                }
                if (!values.genre) {
                  errors.genre = 'Required';
                  success = false;
                } else {
                  success = true;
                }
                if (!values.description) {
                  errors.description = 'Required';
                }
                return success ? true : errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  values.image = BeerImg;
                  setBeerList([...beerList, values]);
                  console.log(JSON.stringify(values));
                  setSubmitting(false);
                  setShowModal(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex flex-col gap-6 mt-6">
                    <h1>Add a New Beer</h1>
                    <div className="border w-10">
                      <Image src={BeerImg} alt="beer" width={39.26} height={57.06} />
                    </div>
                    <Field
                      type="text"
                      name="name"
                      className="border border-gray-500 px-2 h-10 rounded-md"
                      placeholder="Name*"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                    <Field
                      type="text"
                      name="genre"
                      className="border border-gray-500 px-2 h-10 rounded-md"
                      placeholder="Genre*"
                    />
                    <ErrorMessage name="genre" component="div" className="text-red-500" />
                    <Field
                      type="textarea"
                      rows={40}
                      name="description"
                      className="border border-gray-500 px-2 h-10 rounded-md"
                      placeholder="Description*"
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500" />
                  </div>
                  <div className="absolute bottom-10 right-10">
                    <button onClick={() => setShowModal(false)} className=" text-gray-500 mr-6">
                      Cancel
                    </button>
                    <button type="submit" className=" bg-blue-700 text-white p-6 py-2">
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <div
        className={showModal ? 'show' : 'hide'}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div className="backdrop"></div>;
      </div>
    </div>
  );
};

export default Modal;
