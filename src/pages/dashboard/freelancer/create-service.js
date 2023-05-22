/* eslint-disable arrow-body-style */
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, isNotEmpty } from '@mantine/form';
import { TextInput, Grid, Textarea, Select } from '@mantine/core';

import { HamzryAPI } from '@/config/api/HamzryAPI';
import { generalActions } from '@/state/general/generalReducer';
import { PageContainer } from '@/shared/components/PageContainer';
import { DashboardPageHeader } from '@/shared/components/DashboardPageHeader';
import { DashboardSectionCard } from '@/shared/components/DashboardSectionCard';
import { DashboardSectionTitle } from '@/shared/components/DashboardSectionTitle';
import { ServicePackageTable } from '@/shared/components/ServicePackageTable';
import { CatchError } from '@/shared/utils/CatchError';
import { notificationFactory } from '@/shared/utils/notificationFactory';

// TODO: Add media attachment as part of form data for project

function CreateService() {
  // const { categories } = useSelector((state) => state.general);

  // const dispatch = useDispatch();

  // const form = useForm({
  //   initialValues: {
  //     title: '',
  //     description: '',
  //     category: {
  //       main: '',
  //       sub: '',
  //       sub_sub: '',
  //     },
  //     skills: ['', ''],
  //     packages: {
  //       basic: {
  //         title: 'basic',
  //         description: '',
  //         price: '',
  //         revisionNumber: 1,
  //         deliveryTime: '',
  //       },
  //       standard: {
  //         title: 'basic',
  //         description: '',
  //         price: '',
  //         revisionNumber: 1,
  //         deliveryTime: '',
  //       },
  //       premium: {
  //         title: 'basic',
  //         description: '',
  //         price: '',
  //         revisionNumber: 1,
  //         deliveryTime: '',
  //       },
  //     },
  //     attachment: [
  //       {
  //         title: '',
  //         description: '',
  //         price: '',
  //       },
  //     ],
  //   },
  //   validate: {
  //     title: isNotEmpty('Title should not be empty'),
  //     description: isNotEmpty('Description should not be empty'),
  //     category: {
  //       sub: isNotEmpty('Subcategoy should not be empty'),
  //       main: isNotEmpty('Main categoy should not be empty'),
  //       sub_sub: isNotEmpty('Sub-subcategoy should not be empty'),
  //     },
  //   },
  // });

  // // Filters out the names of the main categories from the `category` list
  // const mainCategories = useMemo(() => {
  //   return categories.map(({ name }) => name);
  // }, [categories]);

  // // Filters out the names of the sub categories from the `category` list
  // const selectedCategories = useMemo(() => {
  //   const catigFilter = (catig) => catig.name === form.values.category.main;
  //   const selectedCategory = categories.find(catigFilter);

  //   return selectedCategory?.subCategories?.map(({ name }) => name);
  // }, [form.values.category.main]);

  // // Filters out the names of the sub_sub categories from the `category` list
  // const subSubCategories = useMemo(() => {
  //   const catigFilter = (catig) => catig.name === form.values.category.main;
  //   const mainCategory = categories.find(catigFilter);

  //   const subCatigFilter = (cat) => cat.name === form.values.category.sub;
  //   const subCategory = mainCategory?.subCategories?.find(subCatigFilter);

  //   return subCategory?.navigationItems?.map(({ name }) => name);
  // }, [form.values.category.main, form.values.category.sub]);

  // const submitForm = form.onSubmit(async (values) => {
  //   const isFormValid = form.isValid();
  //   if (isFormValid !== true) return null;

  //   try {
  //     dispatch(generalActions.startLoading());

  //     const response = await HamzryAPI.post('/api/projects', values);

  //     dispatch(generalActions.stopLoading());
  //   } catch (error) {
  //     dispatch(generalActions.stopLoading());

  //     const checkError = new CatchError(error);
  //     notificationFactory(checkError.network());
  //   }
  // });

  return (
    <PageContainer.Marketplace>
      <DashboardPageHeader
        showButton
        btnLabel="Save & Publish"
        // action={submitForm}
        title="Create Service"
        descr={`Create a service.Simply fill out the form inputs with details 
        about your service`}
      />

      <DashboardSectionCard>
        {/* Basic Information */}
        <DashboardSectionTitle title="Basic Information" />

        {/* <form>
          <Grid gap="xl" py="xl" px={{ base: 0, md: 'xl' }} maw={800}>
            <Grid.Col span={12}>
              <TextInput
                required
                radius="md"
                size="md"
                label="Service Title"
                placeholder="eg. I will create a an ecommer ui design with ..."
                {...form.getInputProps('title')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={4}>
              <Select
                clearable
                required
                label="Main Category"
                placeholder="select"
                size="md"
                data={mainCategories}
                {...form.getInputProps('category.main')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={4}>
              <Select
                clearable
                required
                disabled={form.values.category.main === ''}
                label="Subcategory"
                placeholder="select"
                size="md"
                data={selectedCategories ?? []}
                {...form.getInputProps('category.sub')}
              />
            </Grid.Col>
            <Grid.Col span={12} sm={4}>
              <Select
                clearable
                required
                disabled={form.values.category.sub === ''}
                label="Sub Subcategory"
                placeholder="choose"
                size="md"
                data={subSubCategories ?? []}
                {...form.getInputProps('category.sub_sub')}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Textarea
                required
                placeholder="start typing"
                label="Project Description"
                minRows={4}
                maxRows={4}
                {...form.getInputProps('description')}
              />
            </Grid.Col>
          </Grid>
        </form> */}
      </DashboardSectionCard>

      <DashboardSectionCard>
        <DashboardSectionTitle title="Packages" />
        {/* Service Packages goes here */}

        <ServicePackageTable />
      </DashboardSectionCard>
    </PageContainer.Marketplace>
  );
}

export default CreateService;
