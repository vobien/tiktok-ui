import Button from '~/components/Button';

function MenuItem({ data, className }) {
  return (
    <Button className={className} leftIcon={data.leftIcon} rightIcon={data.rightIcon}>
      {data.title}
    </Button>
  );
}

export default MenuItem;
