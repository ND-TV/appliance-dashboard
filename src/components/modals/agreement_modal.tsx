'use client';

import {
  Agreement,
  Appliance,
} from '@/lib/definitions';
import {activeAgreement} from '@/lib/effects/active_agreement';
import {
  addAgreement,
  updateAgreement,
} from '@/lib/effects/agreements';
import {appliances} from '@/lib/effects/appliances';
import {
  newAgreement,
  newAppliance,
} from '@/lib/mock';
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
import {useUnit} from 'effector-react';
import React, {useEffect} from 'react';
import {
  Controller,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import {
  IoAddOutline as Plus,
  IoTrashOutline as Delete,
} from 'react-icons/io5';

type AgreementModalProps = Omit<ModalProps, 'children'>;

const MAX_APPLIANCE_QUANTITY = 6;

export default function AgreementModal(props: AgreementModalProps) {
  const appliancesList = useUnit(appliances);
  const currentAgreement = useUnit(activeAgreement);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Agreement>({
    defaultValues: newAgreement,
  });

  const {
    fields: applianceFields,
    append: addAppliance,
    remove: removeAppliance,
  } = useFieldArray({
    control,
    name: 'appliances',
  });

  const onSubmit: SubmitHandler<Agreement> = (agreement) => {
    currentAgreement ?
      updateAgreement(agreement) :
      addAgreement(agreement);

    const hasError = Object.keys(errors).length;
    if (!hasError) {
      props.onClose?.();
    }
  };

  const handleApplianceAdd = () => {
    addAppliance(newAppliance);
  };

  useEffect(() => {
    reset(currentAgreement ?? newAgreement);
  }, [currentAgreement, reset]);

  const renderApplianceFields =
      (appliance: Appliance, applianceIndex: number) => {
        return (
          <div className="flex gap-1" key={appliance.id}>
            <Controller
              control={control}
              name={`appliances.${applianceIndex}.title`}
              render={({ field: { onChange, value} }) => (
                <Autocomplete
                  label="Выберите оборудование"
                  onInputChange={onChange}
                  inputValue={value}
                  allowsCustomValue
                >
                  {appliancesList.map((appliance) => (
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
              onClick={() => removeAppliance(applianceIndex)}
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
                <Controller
                  control={control}
                  name='title'
                  rules={{
                    required: 'Укажите название',
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Input
                      type="text"
                      label="Название"
                      errorMessage={errors.title?.message}
                      onChange={onChange}
                      value={value}
                    />
                  )}
                />
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
