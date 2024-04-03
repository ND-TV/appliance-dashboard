'use client';

import {Appliance} from '@/lib/definitions';
import {mockAppliances} from '@/lib/mock/appliances';
import {Input} from '@nextui-org/input';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
} from '@nextui-org/modal';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
} from '@nextui-org/react';
import React, {
  useEffect,
  useState,
} from 'react';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { IoAddOutline as Plus } from 'react-icons/io5';
import { IoTrashOutline as Delete } from 'react-icons/io5';

type AddRentModalProps = Omit<ModalProps, 'children'>;

const MAX_APPLIANCE_QUANTITY = 6;

type ApplianceField = Pick<Appliance, 'title'>;

interface IFormInput {
  startDate: string;
  endDate: string;
  appliance: ApplianceField[],
}

export default function AddRentModal(props: AddRentModalProps) {
  const [appliances, setAppliances] = useState<Appliance[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const {
    fields: applianceFields,
    append: addAppliance,
    remove: removeAppliance,
  } = useFieldArray({
    control,
    name: 'appliance',
  });
  const onSubmit: SubmitHandler<IFormInput> = (data) => alert(JSON.stringify(data));

  useEffect(() => {
    // Fetch appliances.
    setAppliances(mockAppliances);
  }, []);

  const handleApplianceAdd = () => {
    addAppliance({
      title: '',
    });
  };

  const renderApplianceFields =
      (applianceField: ApplianceField & {id: string}, applianceFieldIndex: number) => {
        return (
          <div className="flex gap-1" key={applianceField.id}>
            <Controller
              control={control}
              name={`appliance.${applianceFieldIndex}.title`}
              render={({ field: { onChange, value } }) => (
                <Autocomplete
                  label="Выберите оборудование"
                  onInputChange={onChange}
                  inputValue={value}
                  allowsCustomValue
                >
                  {appliances.map((appliance) => (
                    <AutocompleteItem key={appliance.id} value={appliance.title}>
                      {appliance.title}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              )}
            />
            <Button
              color="danger"
              variant="light"
              onClick={() => removeAppliance(applianceFieldIndex)}
              className="min-w-[56px] min-h-[56px] text-[#ccc] hover:text-[#fff] transition-colors"
              size="lg"
              aria-label="Remove appliance"
              isIconOnly
            >
              <Delete size={24} />
            </Button>
          </div>
        );
      };

  return (
    <Modal backdrop="blur" {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Аренда оборудования
              </ModalHeader>
              <ModalBody>
                <div className="flex gap-3">
                  <Controller
                    control={control}
                    name='startDate'
                    rules={{
                      required: 'Укажите начало периода',
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type="date"
                        label="Дата от.."
                        errorMessage={errors.startDate?.message}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name='endDate'
                    rules={{
                      required: 'Укажите окончание периода',
                    }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type="date"
                        label="Дата до.."
                        errorMessage={errors.endDate?.message}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </div>
                {applianceFields.map(renderApplianceFields)}
                {
                  applianceFields.length < MAX_APPLIANCE_QUANTITY && (
                    <Button
                      color="success"
                      variant="light"
                      onClick={handleApplianceAdd}
                      className="ml-[auto] text-[#ccc] hover:text-[#fff] transition-colors"
                      aria-label="Add appliance"
                      endContent={<Plus size={24} />}
                    >
                      Добавить оборудование
                    </Button>
                  )
                }
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                >
                  Отмена
                </Button>
                <Button
                  className="text-white"
                  color="success"
                  type="submit"
                >
                  Сохранить
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </form>
    </Modal>
  );
}